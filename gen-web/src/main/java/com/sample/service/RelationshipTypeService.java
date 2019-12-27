package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.RelationshipType;
import com.sample.common.ListWrapper;
import com.sample.dao.RelationshipTypeRepository;
import com.sample.common.SortedIndicator;

@Service
public class RelationshipTypeService {

	@Autowired
	RelationshipTypeRepository relationshipTypeRepository;

	public ListWrapper<RelationshipType> getRelationshipTypes(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return relationshipTypeDAO.getRelationshipTypes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<RelationshipType> relationshipTypePage = relationshipTypeRepository.findAll(request);
		ListWrapper<RelationshipType> results = new ListWrapper<>();
		results.setRows(relationshipTypePage.getContent());
		results.setTotalRecords(new Long(relationshipTypePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public RelationshipType getRelationshipType(String id) {
		return relationshipTypeRepository.findOne(id);
	}

	public void saveNewRelationshipType(RelationshipType relationshipType) {
		relationshipTypeRepository.saveAndFlush(relationshipType);
	}

	public void saveRelationshipType(RelationshipType relationshipType) {
		relationshipTypeRepository.saveAndFlush(relationshipType);
	}
}
