package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.sample.web.domain.Relationship;
//import the domain
import com.sample.web.domain.RelationshipMapping;
import com.sample.web.domain.RelationshipMappingId;
import com.sample.web.domain.RelationshipType;
import com.sample.web.dto.RelationshipMappingDTO;
import com.sample.common.ListWrapper;
import com.sample.dao.RelationshipMappingRepository;
import com.sample.dao.RelationshipRepository;
import com.sample.common.SortedIndicator;

@Service
public class RelationshipMappingService {

	@Autowired
	RelationshipMappingRepository relationshipMappingRepository;
	
	@Autowired
	RelationshipRepository relationshipRepository;

	public ListWrapper<RelationshipMapping> getRelationshipMappings(int pageNumber, int pageSize,
			String sortByAttribute, String sortDirection) {
		//return relationshipMappingDAO.getRelationshipMappings(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<RelationshipMapping> relationshipMappingPage = relationshipMappingRepository.findAll(request);
		ListWrapper<RelationshipMapping> results = new ListWrapper<>();
		results.setRows(relationshipMappingPage.getContent());
		results.setTotalRecords(new Long(relationshipMappingPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public RelationshipMapping getRelationshipMapping(RelationshipMappingId id) {
		return relationshipMappingRepository.findOne(id);
	}

	public void saveNewRelationshipMapping(RelationshipMappingDTO mappingDTO) {
		RelationshipType relType = new RelationshipType(mappingDTO.getRelTypeId(), null, null);
		Relationship newRelationship = new Relationship(null, relType, mappingDTO.getRelName());
		Relationship savedRel =  relationshipRepository.saveAndFlush(newRelationship);
		
		RelationshipMapping mappingToSave = new RelationshipMapping();
		
		RelationshipMappingId id = new RelationshipMappingId(savedRel.getRelId(), mappingDTO.getSourceItemId(), 
							mappingDTO.getTargetItemId());
		mappingToSave.setId(id);
		
		relationshipMappingRepository.saveAndFlush(mappingToSave);
	}

	public void saveRelationshipMapping(RelationshipMapping relationshipMapping) {
		relationshipMappingRepository.saveAndFlush(relationshipMapping);
	}
}
