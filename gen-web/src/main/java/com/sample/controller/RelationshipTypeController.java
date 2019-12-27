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

//import the domain
import com.sample.web.domain.RelationshipType;
import com.sample.service.RelationshipTypeService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class RelationshipTypeController extends BaseController {

	@Autowired
	RelationshipTypeService relationshipTypeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/relationshiptype/{id}", method = RequestMethod.GET)
	public RelationshipType getRelationshipType(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		RelationshipType relationshipType = relationshipTypeService.getRelationshipType(id);
		if (relationshipType == null) {
			RelationshipType relTypeToReturn =  new RelationshipType();
			relTypeToReturn.setRelTypeId("");
			relTypeToReturn.setRelTypeCode("");
			relTypeToReturn.setRelTypeName("");
			relTypeToReturn.setRelTypeDesc("");
			return relTypeToReturn;
		}
		else
			return relationshipType;
	}

	@RequestMapping(value = "/relationshiptype", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public RelationshipType saveNewRelationshipType(@Valid @RequestBody RelationshipType relationshipType) {
		relationshipTypeService.saveNewRelationshipType(relationshipType);
		return relationshipType;
	}

	@RequestMapping(value = "/relationshiptype/{id}", headers = {
			"accept=application/json" }, method = RequestMethod.PUT)
	public RelationshipType updateRelationshipType(@Valid @RequestBody RelationshipType relationshipType) {
		relationshipTypeService.saveRelationshipType(relationshipType);
		return relationshipType;
	}

	@RequestMapping("/relationshiptypes")
	public ListWrapper<RelationshipType> getAllRelationshipTypes(
			@RequestParam(value = "page", defaultValue="1") int pageNumber,
			@RequestParam(value= "per_page", defaultValue="1000") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return relationshipTypeService.getRelationshipTypes(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
