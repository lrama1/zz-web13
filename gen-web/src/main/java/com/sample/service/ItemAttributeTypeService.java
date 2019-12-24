package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.ItemAttributeType;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemAttributeTypeRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemAttributeTypeService {

	@Autowired
	ItemAttributeTypeRepository itemAttributeTypeRepository;

	public ListWrapper<ItemAttributeType> getItemAttributeTypes(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return itemAttributeTypeDAO.getItemAttributeTypes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<ItemAttributeType> itemAttributeTypePage = itemAttributeTypeRepository.findAll(request);
		ListWrapper<ItemAttributeType> results = new ListWrapper<>();
		results.setRows(itemAttributeTypePage.getContent());
		results.setTotalRecords(new Long(itemAttributeTypePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemAttributeType getItemAttributeType(String id) {
		return itemAttributeTypeRepository.findOne(id);
	}

	public void saveNewItemAttributeType(ItemAttributeType itemAttributeType) {
		itemAttributeTypeRepository.saveAndFlush(itemAttributeType);
	}

	public void saveItemAttributeType(ItemAttributeType itemAttributeType) {
		itemAttributeTypeRepository.saveAndFlush(itemAttributeType);
	}
}
