package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.Relationship;
import com.sample.common.ListWrapper;
import com.sample.dao.RelationshipRepository;
import com.sample.common.SortedIndicator;

@Service
public class RelationshipService {

	@Autowired
	RelationshipRepository relationshipRepository;

	public ListWrapper<Relationship> getRelationships(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return relationshipDAO.getRelationships(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<Relationship> relationshipPage = relationshipRepository.findAll(request);
		ListWrapper<Relationship> results = new ListWrapper<>();
		results.setRows(relationshipPage.getContent());
		results.setTotalRecords(new Long(relationshipPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public Relationship getRelationship(String id) {
		return relationshipRepository.findOne(id);
	}

	public void saveNewRelationship(Relationship relationship) {
		relationshipRepository.saveAndFlush(relationship);
	}

	public void saveRelationship(Relationship relationship) {
		relationshipRepository.saveAndFlush(relationship);
	}
}
