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
import com.sample.web.domain.Item;
import com.sample.web.domain.ItemType;
import com.sample.service.ItemService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;
import java.util.LinkedHashSet;

@RestController
public class ItemController extends BaseController {

	@Autowired
	ItemService itemService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/item/{id}", method = RequestMethod.GET)
	public Item getItem(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		Item item = itemService.getItem(id);
		if (item == null) {
			Item itemToReturn =  new Item();
			itemToReturn.setItemId("");
			itemToReturn.setItemCode("");
			itemToReturn.setItemName("");
			itemToReturn.setItemDesc("");
			itemToReturn.setItemType(new ItemType());
			itemToReturn.setItemAttributes(new LinkedHashSet<>());
			return itemToReturn;
		}
		else
			return item;
	}

	@RequestMapping(value = "/item", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public Item saveNewItem(@Valid @RequestBody Item item) {
		itemService.saveNewItem(item);
		return item;
	}

	@RequestMapping(value = "/item/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public Item updateItem(@Valid @RequestBody Item item) {
		itemService.saveItem(item);
		return item;
	}

	@RequestMapping("/items")
	public ListWrapper<Item> getAllItems(@RequestParam("page") int pageNumber, @RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		ListWrapper<Item> items =  itemService.getItems(pageNumber, pageSize, sortByAttributeName, sortDirection);
		return items;

	}

	//=============
}
