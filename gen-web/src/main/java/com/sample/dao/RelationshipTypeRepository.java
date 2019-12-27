package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.RelationshipType;

@Repository
public interface RelationshipTypeRepository extends JpaRepository<RelationshipType, String> {

}
