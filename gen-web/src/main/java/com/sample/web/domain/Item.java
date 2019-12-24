package com.sample.web.domain;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * Item entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ITEM", schema = "PUBLIC", catalog = "PUBLIC", uniqueConstraints = @UniqueConstraint(columnNames = {
		"ITEM_TYPE_ID", "ITEM_ID" }))

public class Item implements java.io.Serializable {

	// Fields

	private String itemId;
	
	//@JsonManagedReference
	private ItemType itemType;
	private String itemCode;
	private String itemName;
	private String itemDesc;
	private String itemMetaphoneSrcString;
	private String itemMetaphoneKey;
	private Set<ItemAttribute> itemAttributes = new HashSet<ItemAttribute>(0);
	private Set<RelationshipMapping> relationshipMappingsForSourceItemId = new HashSet<RelationshipMapping>(0);
	private Set<RelationshipMapping> relationshipMappingsForTargetItemId = new HashSet<RelationshipMapping>(0);

	// Constructors

	/** default constructor */
	public Item() {
	}

	/** minimal constructor */
	public Item(String itemId, ItemType itemType, String itemCode) {
		this.itemId = itemId;
		this.itemType = itemType;
		this.itemCode = itemCode;
	}

	/** full constructor */
	public Item(String itemId, ItemType itemType, String itemCode, String itemName, String itemDesc,
			String itemMetaphoneSrcString, String itemMetaphoneKey, Set<ItemAttribute> itemAttributes,
			Set<RelationshipMapping> relationshipMappingsForSourceItemId,
			Set<RelationshipMapping> relationshipMappingsForTargetItemId) {
		this.itemId = itemId;
		this.itemType = itemType;
		this.itemCode = itemCode;
		this.itemName = itemName;
		this.itemDesc = itemDesc;
		this.itemMetaphoneSrcString = itemMetaphoneSrcString;
		this.itemMetaphoneKey = itemMetaphoneKey;
		this.itemAttributes = itemAttributes;
		this.relationshipMappingsForSourceItemId = relationshipMappingsForSourceItemId;
		this.relationshipMappingsForTargetItemId = relationshipMappingsForTargetItemId;
	}

	// Property accessors
	@Id

	@Column(name = "ITEM_ID", unique = true, nullable = false, length = 32)

	public String getItemId() {
		return this.itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ITEM_TYPE_ID", nullable = false)

	public ItemType getItemType() {
		return this.itemType;
	}

	public void setItemType(ItemType itemType) {
		this.itemType = itemType;
	}

	@Column(name = "ITEM_CODE", nullable = false, length = 64)

	public String getItemCode() {
		return this.itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	@Column(name = "ITEM_NAME", length = 256)

	public String getItemName() {
		return this.itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	@Column(name = "ITEM_DESC", length = 256)

	public String getItemDesc() {
		return this.itemDesc;
	}

	public void setItemDesc(String itemDesc) {
		this.itemDesc = itemDesc;
	}

	@Column(name = "ITEM_METAPHONE_SRC_STRING", length = 256)

	public String getItemMetaphoneSrcString() {
		return this.itemMetaphoneSrcString;
	}

	public void setItemMetaphoneSrcString(String itemMetaphoneSrcString) {
		this.itemMetaphoneSrcString = itemMetaphoneSrcString;
	}

	@Column(name = "ITEM_METAPHONE_KEY", length = 64)

	public String getItemMetaphoneKey() {
		return this.itemMetaphoneKey;
	}

	public void setItemMetaphoneKey(String itemMetaphoneKey) {
		this.itemMetaphoneKey = itemMetaphoneKey;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "item")

	public Set<ItemAttribute> getItemAttributes() {
		return this.itemAttributes;
	}

	public void setItemAttributes(Set<ItemAttribute> itemAttributes) {
		this.itemAttributes = itemAttributes;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemBySourceItemId")

	public Set<RelationshipMapping> getRelationshipMappingsForSourceItemId() {
		return this.relationshipMappingsForSourceItemId;
	}

	public void setRelationshipMappingsForSourceItemId(Set<RelationshipMapping> relationshipMappingsForSourceItemId) {
		this.relationshipMappingsForSourceItemId = relationshipMappingsForSourceItemId;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemByTargetItemId")

	public Set<RelationshipMapping> getRelationshipMappingsForTargetItemId() {
		return this.relationshipMappingsForTargetItemId;
	}

	public void setRelationshipMappingsForTargetItemId(Set<RelationshipMapping> relationshipMappingsForTargetItemId) {
		this.relationshipMappingsForTargetItemId = relationshipMappingsForTargetItemId;
	}

}