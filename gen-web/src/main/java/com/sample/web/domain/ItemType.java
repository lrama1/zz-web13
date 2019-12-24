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
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * ItemType entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ITEM_TYPE", schema = "PUBLIC", catalog = "PUBLIC", uniqueConstraints = @UniqueConstraint(columnNames = "ITEM_TYPE_CODE"))

public class ItemType implements java.io.Serializable {

	// Fields

	private String itemTypeId;
	private String itemTypeCode;
	private String itemTypeName;
	private String itemTypeDesc;
	private Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForSourceItemTypeId = new HashSet<ItemRelationshipRuleBase>(
			0);
	private Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForTargetItemTypeId = new HashSet<ItemRelationshipRuleBase>(
			0);
	private Set<ItemAttributeType> itemAttributeTypesForItemAttrTypeLookupListId = new HashSet<ItemAttributeType>(0);
	
	@JsonManagedReference
	private Set<ItemAttributeType> itemAttributeTypesForItemTypeId = new HashSet<ItemAttributeType>(0);
	private Set<Item> items = new HashSet<Item>(0);

	// Constructors

	/** default constructor */
	public ItemType() {
	}

	/** minimal constructor */
	public ItemType(String itemTypeId, String itemTypeCode, String itemTypeName) {
		this.itemTypeId = itemTypeId;
		this.itemTypeCode = itemTypeCode;
		this.itemTypeName = itemTypeName;
	}

	/** full constructor */
	public ItemType(String itemTypeId, String itemTypeCode, String itemTypeName, String itemTypeDesc,
			Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForSourceItemTypeId,
			Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForTargetItemTypeId,
			Set<ItemAttributeType> itemAttributeTypesForItemAttrTypeLookupListId,
			Set<ItemAttributeType> itemAttributeTypesForItemTypeId, Set<Item> items) {
		this.itemTypeId = itemTypeId;
		this.itemTypeCode = itemTypeCode;
		this.itemTypeName = itemTypeName;
		this.itemTypeDesc = itemTypeDesc;
		this.itemRelationshipRuleBasesForSourceItemTypeId = itemRelationshipRuleBasesForSourceItemTypeId;
		this.itemRelationshipRuleBasesForTargetItemTypeId = itemRelationshipRuleBasesForTargetItemTypeId;
		this.itemAttributeTypesForItemAttrTypeLookupListId = itemAttributeTypesForItemAttrTypeLookupListId;
		this.itemAttributeTypesForItemTypeId = itemAttributeTypesForItemTypeId;
		this.items = items;
	}

	// Property accessors
	@Id @GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid",
	  strategy = "uuid")
	@Column(name = "ITEM_TYPE_ID", unique = true, nullable = false, length = 32)

	public String getItemTypeId() {
		return this.itemTypeId;
	}

	public void setItemTypeId(String itemTypeId) {
		this.itemTypeId = itemTypeId;
	}

	@Column(name = "ITEM_TYPE_CODE", unique = true, nullable = false, length = 64)

	public String getItemTypeCode() {
		return this.itemTypeCode;
	}

	public void setItemTypeCode(String itemTypeCode) {
		this.itemTypeCode = itemTypeCode;
	}

	@Column(name = "ITEM_TYPE_NAME", nullable = false, length = 128)

	public String getItemTypeName() {
		return this.itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	@Column(name = "ITEM_TYPE_DESC", length = 256)

	public String getItemTypeDesc() {
		return this.itemTypeDesc;
	}

	public void setItemTypeDesc(String itemTypeDesc) {
		this.itemTypeDesc = itemTypeDesc;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemTypeBySourceItemTypeId")

	public Set<ItemRelationshipRuleBase> getItemRelationshipRuleBasesForSourceItemTypeId() {
		return this.itemRelationshipRuleBasesForSourceItemTypeId;
	}

	public void setItemRelationshipRuleBasesForSourceItemTypeId(
			Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForSourceItemTypeId) {
		this.itemRelationshipRuleBasesForSourceItemTypeId = itemRelationshipRuleBasesForSourceItemTypeId;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemTypeByTargetItemTypeId")

	public Set<ItemRelationshipRuleBase> getItemRelationshipRuleBasesForTargetItemTypeId() {
		return this.itemRelationshipRuleBasesForTargetItemTypeId;
	}

	public void setItemRelationshipRuleBasesForTargetItemTypeId(
			Set<ItemRelationshipRuleBase> itemRelationshipRuleBasesForTargetItemTypeId) {
		this.itemRelationshipRuleBasesForTargetItemTypeId = itemRelationshipRuleBasesForTargetItemTypeId;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemTypeByItemAttrTypeLookupListId")
	public Set<ItemAttributeType> getItemAttributeTypesForItemAttrTypeLookupListId() {
		return this.itemAttributeTypesForItemAttrTypeLookupListId;
	}

	public void setItemAttributeTypesForItemAttrTypeLookupListId(
			Set<ItemAttributeType> itemAttributeTypesForItemAttrTypeLookupListId) {
		this.itemAttributeTypesForItemAttrTypeLookupListId = itemAttributeTypesForItemAttrTypeLookupListId;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "itemTypeByItemTypeId")
	public Set<ItemAttributeType> getItemAttributeTypesForItemTypeId() {
		return this.itemAttributeTypesForItemTypeId;
	}

	public void setItemAttributeTypesForItemTypeId(Set<ItemAttributeType> itemAttributeTypesForItemTypeId) {
		this.itemAttributeTypesForItemTypeId = itemAttributeTypesForItemTypeId;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemType")
	public Set<Item> getItems() {
		return this.items;
	}

	public void setItems(Set<Item> items) {
		this.items = items;
	}

}