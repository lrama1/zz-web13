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
import com.sample.web.domain.ItemAttributeType;
import com.sample.service.ItemAttributeTypeService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ItemAttributeTypeController extends BaseController {

	@Autowired
	ItemAttributeTypeService itemAttributeTypeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemattributetype/{id}", method = RequestMethod.GET)
	public ItemAttributeType getItemAttributeType(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemAttributeType itemAttributeType = itemAttributeTypeService.getItemAttributeType(id);
		if (itemAttributeType == null) {
			ItemAttributeType itemAttrTypeToReturn =  new ItemAttributeType();
			itemAttrTypeToReturn.setItemAttrTypeId("");
			itemAttrTypeToReturn.setItemAttrTypeCode("");
			itemAttrTypeToReturn.setItemAttrTypeName("");
			return itemAttrTypeToReturn;
		}
		else
			return itemAttributeType;
	}

	@RequestMapping(value = "/itemattributetype", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public ItemAttributeType saveNewItemAttributeType(@Valid @RequestBody ItemAttributeType itemAttributeType) {
		itemAttributeTypeService.saveNewItemAttributeType(itemAttributeType);
		return itemAttributeType;
	}

	@RequestMapping(value = "/itemattributetype/{id}", headers = {
			"accept=application/json" }, method = RequestMethod.PUT)
	public ItemAttributeType updateItemAttributeType(@Valid @RequestBody ItemAttributeType itemAttributeType) {
		itemAttributeTypeService.saveItemAttributeType(itemAttributeType);
		return itemAttributeType;
	}

	@RequestMapping("/itemattributetypes")
	public ListWrapper<ItemAttributeType> getAllItemAttributeTypes(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemAttributeTypeService.getItemAttributeTypes(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
