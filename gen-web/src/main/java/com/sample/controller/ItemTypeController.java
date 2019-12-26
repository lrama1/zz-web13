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
import com.sample.web.domain.ItemType;
import com.sample.service.ItemTypeService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ItemTypeController extends BaseController {

	@Autowired
	ItemTypeService itemTypeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemtype/{id}", method = RequestMethod.GET)
	public ItemType getItemType(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemType itemType = itemTypeService.getItemType(id);
		if (itemType == null) {
			ItemType itemTypeToReturn =  new ItemType();
			itemTypeToReturn.setItemTypeId("");
			itemTypeToReturn.setItemTypeCode("");
			itemTypeToReturn.setItemTypeName("");
			return itemTypeToReturn;
		}
		else
			return itemType;
	}

	@RequestMapping(value = "/itemtype", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public ItemType saveNewItemType(@Valid @RequestBody ItemType itemType) {
		return itemTypeService.saveNewItemType(itemType);
	}

	@RequestMapping(value = "/itemtype/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public ItemType updateItemType(@Valid @RequestBody ItemType itemType) {
		return itemTypeService.saveItemType(itemType);
	}

	@RequestMapping("/itemtypes")
	public ListWrapper<ItemType> getAllItemTypes(@RequestParam(value = "page", defaultValue = "1") int pageNumber,
			@RequestParam(value = "per_page", defaultValue = "1000") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemTypeService.getItemTypes(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
