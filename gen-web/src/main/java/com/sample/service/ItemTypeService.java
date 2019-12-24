package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.ItemType;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemTypeRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemTypeService {

	@Autowired
	ItemTypeRepository itemTypeRepository;

	public ListWrapper<ItemType> getItemTypes(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return itemTypeDAO.getItemTypes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<ItemType> itemTypePage = itemTypeRepository.findAll(request);
		ListWrapper<ItemType> results = new ListWrapper<>();
		results.setRows(itemTypePage.getContent());
		results.setTotalRecords(new Long(itemTypePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemType getItemType(String id) {
		return itemTypeRepository.findOne(id);
	}

	public void saveNewItemType(ItemType itemType) {
		itemTypeRepository.saveAndFlush(itemType);
	}

	public void saveItemType(ItemType itemType) {
		itemTypeRepository.saveAndFlush(itemType);
	}
}
