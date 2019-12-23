package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {

}
