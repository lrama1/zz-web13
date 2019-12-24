package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

//import the domain
import com.sample.web.domain.ItemAttrTypeDatatype;
import com.sample.common.ListWrapper;
import com.sample.dao.ItemAttrTypeDatatypeRepository;
import com.sample.common.SortedIndicator;

@Service
public class ItemAttrTypeDatatypeService {

	@Autowired
	ItemAttrTypeDatatypeRepository itemAttrTypeDatatypeRepository;

	public ListWrapper<ItemAttrTypeDatatype> getItemAttrTypeDatatypes(int pageNumber, int pageSize,
			String sortByAttribute, String sortDirection) {
		//return itemAttrTypeDatatypeDAO.getItemAttrTypeDatatypes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = new PageRequest(pageNumber - 1, pageSize);
		Page<ItemAttrTypeDatatype> itemAttrTypeDatatypePage = itemAttrTypeDatatypeRepository.findAll(request);
		ListWrapper<ItemAttrTypeDatatype> results = new ListWrapper<>();
		results.setRows(itemAttrTypeDatatypePage.getContent());
		results.setTotalRecords(new Long(itemAttrTypeDatatypePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemAttrTypeDatatype getItemAttrTypeDatatype(String id) {
		return itemAttrTypeDatatypeRepository.findOne(Byte.parseByte(id));
	}

	public void saveNewItemAttrTypeDatatype(ItemAttrTypeDatatype itemAttrTypeDatatype) {
		itemAttrTypeDatatypeRepository.saveAndFlush(itemAttrTypeDatatype);
	}

	public void saveItemAttrTypeDatatype(ItemAttrTypeDatatype itemAttrTypeDatatype) {
		itemAttrTypeDatatypeRepository.saveAndFlush(itemAttrTypeDatatype);
	}
}
