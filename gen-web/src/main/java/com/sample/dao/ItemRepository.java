package com.sample.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {

	@Query(value = "SELECT item FROM Item item ORDER BY itemId")
	Page<Item> findAllItemsWithPaginationX(Pageable pageable);
}
