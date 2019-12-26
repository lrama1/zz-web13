package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.ItemAttribute;

@Repository
public interface ItemAttributeRepository extends JpaRepository<ItemAttribute, String> {

}
