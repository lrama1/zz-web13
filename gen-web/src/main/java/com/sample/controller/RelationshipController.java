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
import com.sample.web.domain.Relationship;
import com.sample.service.RelationshipService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class RelationshipController extends BaseController {

	@Autowired
	RelationshipService relationshipService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/relationship/{id}", method = RequestMethod.GET)
	public Relationship getRelationship(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		Relationship relationship = relationshipService.getRelationship(id);
		if (relationship == null)
			return new Relationship();
		else
			return relationship;
	}

	@RequestMapping(value = "/relationship", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public Relationship saveNewRelationship(@Valid @RequestBody Relationship relationship) {
		relationshipService.saveNewRelationship(relationship);
		return relationship;
	}

	@RequestMapping(value = "/relationship/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public Relationship updateRelationship(@Valid @RequestBody Relationship relationship) {
		relationshipService.saveRelationship(relationship);
		return relationship;
	}

	@RequestMapping("/relationships")
	public ListWrapper<Relationship> getAllRelationships(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return relationshipService.getRelationships(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
