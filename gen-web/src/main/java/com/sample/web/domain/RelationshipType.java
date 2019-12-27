package com.sample.web.domain;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * RelationshipType entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "RELATIONSHIP_TYPE", schema = "PUBLIC", catalog = "PUBLIC")
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")
public class RelationshipType implements java.io.Serializable {

	// Fields

	private String relTypeId;
	private String relTypeCode;
	private String relTypeName;
	private String relTypeDesc;
	private Set<RelationshipAttributeType> relationshipAttributeTypes = new HashSet<RelationshipAttributeType>(0);
	private Set<Relationship> relationships = new HashSet<Relationship>(0);
	private Set<ItemRelationshipRuleBase> itemRelationshipRuleBases = new HashSet<ItemRelationshipRuleBase>(0);

	// Constructors

	/** default constructor */
	public RelationshipType() {
	}

	/** minimal constructor */
	public RelationshipType(String relTypeId, String relTypeCode, String relTypeName) {
		this.relTypeId = relTypeId;
		this.relTypeCode = relTypeCode;
		this.relTypeName = relTypeName;
	}

	/** full constructor */
	public RelationshipType(String relTypeId, String relTypeCode, String relTypeName, String relTypeDesc,
			Set<RelationshipAttributeType> relationshipAttributeTypes, Set<Relationship> relationships,
			Set<ItemRelationshipRuleBase> itemRelationshipRuleBases) {
		this.relTypeId = relTypeId;
		this.relTypeCode = relTypeCode;
		this.relTypeName = relTypeName;
		this.relTypeDesc = relTypeDesc;
		this.relationshipAttributeTypes = relationshipAttributeTypes;
		this.relationships = relationships;
		this.itemRelationshipRuleBases = itemRelationshipRuleBases;
	}

	// Property accessors
	@Id
	@GeneratedValue(generator="system-uuid")
		@GenericGenerator(name="system-uuid",
		  strategy = "uuid")
	@Column(name = "REL_TYPE_ID", unique = true, nullable = false, length = 32)

	public String getRelTypeId() {
		return this.relTypeId;
	}

	public void setRelTypeId(String relTypeId) {
		this.relTypeId = relTypeId;
	}

	@Column(name = "REL_TYPE_CODE", nullable = false, length = 64)

	public String getRelTypeCode() {
		return this.relTypeCode;
	}

	public void setRelTypeCode(String relTypeCode) {
		this.relTypeCode = relTypeCode;
	}

	@Column(name = "REL_TYPE_NAME", nullable = false, length = 128)

	public String getRelTypeName() {
		return this.relTypeName;
	}

	public void setRelTypeName(String relTypeName) {
		this.relTypeName = relTypeName;
	}

	@Column(name = "REL_TYPE_DESC", length = 256)

	public String getRelTypeDesc() {
		return this.relTypeDesc;
	}

	public void setRelTypeDesc(String relTypeDesc) {
		this.relTypeDesc = relTypeDesc;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "relationshipType")

	public Set<RelationshipAttributeType> getRelationshipAttributeTypes() {
		return this.relationshipAttributeTypes;
	}

	public void setRelationshipAttributeTypes(Set<RelationshipAttributeType> relationshipAttributeTypes) {
		this.relationshipAttributeTypes = relationshipAttributeTypes;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "relationshipType")

	public Set<Relationship> getRelationships() {
		return this.relationships;
	}

	public void setRelationships(Set<Relationship> relationships) {
		this.relationships = relationships;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "relationshipType")

	public Set<ItemRelationshipRuleBase> getItemRelationshipRuleBases() {
		return this.itemRelationshipRuleBases;
	}

	public void setItemRelationshipRuleBases(Set<ItemRelationshipRuleBase> itemRelationshipRuleBases) {
		this.itemRelationshipRuleBases = itemRelationshipRuleBases;
	}

}