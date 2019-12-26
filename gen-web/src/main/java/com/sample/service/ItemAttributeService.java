package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.ItemAttribute;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemAttributeRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemAttributeService {

	@Autowired
	ItemAttributeRepository itemAttributeRepository;

	public ListWrapper<ItemAttribute> getItemAttributes(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return itemAttributeDAO.getItemAttributes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<ItemAttribute> itemAttributePage = itemAttributeRepository.findAll(request);
		ListWrapper<ItemAttribute> results = new ListWrapper<>();
		results.setRows(itemAttributePage.getContent());
		results.setTotalRecords(new Long(itemAttributePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemAttribute getItemAttribute(String id) {
		return itemAttributeRepository.findOne(id);
	}

	public void saveNewItemAttribute(ItemAttribute itemAttribute) {
		itemAttributeRepository.saveAndFlush(itemAttribute);
	}

	public void saveItemAttribute(ItemAttribute itemAttribute) {
		itemAttributeRepository.saveAndFlush(itemAttribute);
	}
}
