package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.security.Principal;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import javax.validation.Valid;

import com.sample.web.domain.Item;
import com.sample.web.domain.Relationship;
//import the domain
import com.sample.web.domain.RelationshipMapping;
import com.sample.web.domain.RelationshipMappingId;
import com.sample.web.dto.RelationshipMappingDTO;
import com.sample.service.RelationshipMappingService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class RelationshipMappingController extends BaseController {

	@Autowired
	RelationshipMappingService relationshipMappingService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/relationshipmapping/{sourceItemId}/{targetItemId}/{relationshipId}", method = RequestMethod.GET)
	public RelationshipMapping getRelationshipMapping(
			@PathVariable("sourceItemId") String sourceItemId,
			@PathVariable("targetItemId") String targetItemId,
			@PathVariable("relationshipId") String relationshipId,
			Principal principal) {
		
		Authentication authenticationToken = (Authentication) principal;
		RelationshipMappingId relMappingId = new RelationshipMappingId(relationshipId, sourceItemId, targetItemId);
		RelationshipMapping relationshipMapping = relationshipMappingService.getRelationshipMapping(relMappingId);
		if (relationshipMapping == null) {
			RelationshipMapping mapping =  new RelationshipMapping();
			RelationshipMappingId id = new RelationshipMappingId(null, sourceItemId, null);
			mapping.setItemBySourceItemId(new Item(sourceItemId,null, null));
			mapping.setItemByTargetItemId(new Item());
			mapping.setRelationship(new Relationship());
			mapping.setId(id);
			return mapping;
		}
		else
			return relationshipMapping;
	}

	@RequestMapping(value = "/relationshipmapping", headers = {
			"accept=application/json" }, method = RequestMethod.POST)
	public RelationshipMappingDTO saveNewRelationshipMapping(@Valid @RequestBody RelationshipMappingDTO relationshipMapping) {
		relationshipMappingService.saveNewRelationshipMapping(relationshipMapping);
		return relationshipMapping;
	}

	@RequestMapping(value = "/relationshipmapping/{id}", headers = {
			"accept=application/json" }, method = RequestMethod.PUT)
	public RelationshipMapping updateRelationshipMapping(@Valid @RequestBody RelationshipMapping relationshipMapping) {
		relationshipMappingService.saveRelationshipMapping(relationshipMapping);
		return relationshipMapping;
	}

	@RequestMapping("/relationshipmappings")
	public ListWrapper<RelationshipMapping> getAllRelationshipMappings(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return relationshipMappingService.getRelationshipMappings(pageNumber, pageSize, sortByAttributeName,
				sortDirection);

	}

	//=============
}
