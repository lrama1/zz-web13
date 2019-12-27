package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.RelationshipMapping;
import com.sample.web.domain.RelationshipMappingId;

@Repository
public interface RelationshipMappingRepository extends JpaRepository<RelationshipMapping, RelationshipMappingId> {

}
