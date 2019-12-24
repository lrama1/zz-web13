package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.ItemAttributeType;

@Repository
public interface ItemAttributeTypeRepository extends JpaRepository<ItemAttributeType, String> {

}
