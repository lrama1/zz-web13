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
import com.sample.web.domain.ItemAttrTypeDatatype;
import com.sample.service.ItemAttrTypeDatatypeService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class ItemAttrTypeDatatypeController extends BaseController {

	@Autowired
	ItemAttrTypeDatatypeService itemAttrTypeDatatypeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemattrtypedatatype/{id}", method = RequestMethod.GET)
	public ItemAttrTypeDatatype getItemAttrTypeDatatype(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemAttrTypeDatatype itemAttrTypeDatatype = itemAttrTypeDatatypeService.getItemAttrTypeDatatype(id);
		if (itemAttrTypeDatatype == null)
			return new ItemAttrTypeDatatype();
		else
			return itemAttrTypeDatatype;
	}

	@RequestMapping(value = "/itemattrtypedatatype", headers = {
			"accept=application/json" }, method = RequestMethod.POST)
	public ItemAttrTypeDatatype saveNewItemAttrTypeDatatype(
			@Valid @RequestBody ItemAttrTypeDatatype itemAttrTypeDatatype) {
		itemAttrTypeDatatypeService.saveNewItemAttrTypeDatatype(itemAttrTypeDatatype);
		return itemAttrTypeDatatype;
	}

	@RequestMapping(value = "/itemattrtypedatatype/{id}", headers = {
			"accept=application/json" }, method = RequestMethod.PUT)
	public ItemAttrTypeDatatype updateItemAttrTypeDatatype(
			@Valid @RequestBody ItemAttrTypeDatatype itemAttrTypeDatatype) {
		itemAttrTypeDatatypeService.saveItemAttrTypeDatatype(itemAttrTypeDatatype);
		return itemAttrTypeDatatype;
	}

	@RequestMapping("/itemattrtypedatatypes")
	public ListWrapper<ItemAttrTypeDatatype> getAllItemAttrTypeDatatypes(
			@RequestParam(value = "page", defaultValue= "1") int pageNumber,
			@RequestParam(value= "per_page", defaultValue = "10") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemAttrTypeDatatypeService.getItemAttrTypeDatatypes(pageNumber, pageSize, sortByAttributeName,
				sortDirection);

	}

	//=============
}
