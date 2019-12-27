package com.sample.service;

import java.util.LinkedHashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.Item;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemService {

	@Autowired
	ItemRepository itemRepository;

	public ListWrapper<Item> getItems(int pageNumber, int pageSize, String sortByAttribute, String sortDirection) {
		//return itemDAO.getItems(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<Item> itemPage = itemRepository.findAll(request);
		//remove relationship mappings so it does not interfere with Jackson
		for(Item item: itemPage.getContent()) {
			item.setRelationshipMappingsForSourceItemId(new LinkedHashSet<>());
		}
		
		ListWrapper<Item> results = new ListWrapper<>();
		results.setRows(itemPage.getContent());
		results.setTotalRecords(new Long(itemPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;
		

	}

	public Item getItem(String id) {
		return itemRepository.findOne(id);
	}

	public void saveNewItem(Item item) {
		itemRepository.saveAndFlush(item);
	}

	public void saveItem(Item item) {
		itemRepository.saveAndFlush(item);
	}
}
