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
//import the domain
import com.sample.web.domain.ItemAttribute;
import com.sample.service.ItemAttributeService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ItemAttributeController extends BaseController {

	@Autowired
	ItemAttributeService itemAttributeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemattribute/{id}", method = RequestMethod.GET)
	public ItemAttribute getItemAttribute(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemAttribute itemAttribute = itemAttributeService.getItemAttribute(id);
		if (itemAttribute == null) {
			ItemAttribute itemAttributeToReturn =  new ItemAttribute();
			itemAttributeToReturn.setItemAttrId("");
			itemAttributeToReturn.setItemAttrValue("");
			return itemAttributeToReturn;
		}
		else
			return itemAttribute;
	}
	
	@RequestMapping(value = "/itemattribute/{id}/{itemAttrTypeId}/{itemId}", method = RequestMethod.GET)
	public ItemAttribute getItemAttribute2(@PathVariable("id") String id, 
			@PathVariable("itemAttrTypeId") String itemAttrTypeId,
			@PathVariable("itemId") String itemId,
			Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemAttribute itemAttribute = itemAttributeService.getItemAttribute(id);
		if (itemAttribute == null) {
			ItemAttribute itemAttributeToReturn =  new ItemAttribute();
			itemAttributeToReturn.setItemAttrId("");
			itemAttributeToReturn.setItemAttrValue("");
			itemAttributeToReturn.setItemAttrTypeId(itemAttrTypeId);
			Item dummyItem = new Item();
			dummyItem.setItemId(itemId);
			itemAttributeToReturn.setItem(dummyItem);
			return itemAttributeToReturn;
		}
		else
			return itemAttribute;
	}

	@RequestMapping(value = "/itemattribute", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public ItemAttribute saveNewItemAttribute(@Valid @RequestBody ItemAttribute itemAttribute) {
		itemAttributeService.saveNewItemAttribute(itemAttribute);
		return itemAttribute;
	}

	@RequestMapping(value = "/itemattribute/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public ItemAttribute updateItemAttribute(@Valid @RequestBody ItemAttribute itemAttribute) {
		itemAttributeService.saveItemAttribute(itemAttribute);
		return itemAttribute;
	}

	@RequestMapping("/itemattributes")
	public ListWrapper<ItemAttribute> getAllItemAttributes(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemAttributeService.getItemAttributes(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
