package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.ItemAttrTypeDatatype;

@Repository
public interface ItemAttrTypeDatatypeRepository extends JpaRepository<ItemAttrTypeDatatype, Byte> {

}
