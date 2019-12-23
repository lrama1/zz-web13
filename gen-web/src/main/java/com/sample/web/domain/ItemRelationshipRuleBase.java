package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


/**
 * ItemRelationshipRuleBase entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="ITEM_RELATIONSHIP_RULE_BASE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
, uniqueConstraints = @UniqueConstraint(columnNames={"SOURCE_ITEM_TYPE_ID", "TARGET_ITEM_TYPE_ID", "REL_TYPE_ID"})
)

public class ItemRelationshipRuleBase  implements java.io.Serializable {


    // Fields    

     private String itemRelRuleBaseId;
     private ItemType itemTypeBySourceItemTypeId;
     private ItemType itemTypeByTargetItemTypeId;
     private RelationshipType relationshipType;
     private String itemRelRuleBaseDesc;


    // Constructors

    /** default constructor */
    public ItemRelationshipRuleBase() {
    }

    
    /** full constructor */
    public ItemRelationshipRuleBase(String itemRelRuleBaseId, ItemType itemTypeBySourceItemTypeId, ItemType itemTypeByTargetItemTypeId, RelationshipType relationshipType, String itemRelRuleBaseDesc) {
        this.itemRelRuleBaseId = itemRelRuleBaseId;
        this.itemTypeBySourceItemTypeId = itemTypeBySourceItemTypeId;
        this.itemTypeByTargetItemTypeId = itemTypeByTargetItemTypeId;
        this.relationshipType = relationshipType;
        this.itemRelRuleBaseDesc = itemRelRuleBaseDesc;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="ITEM_REL_RULE_BASE_ID", unique=true, nullable=false, length=32)

    public String getItemRelRuleBaseId() {
        return this.itemRelRuleBaseId;
    }
    
    public void setItemRelRuleBaseId(String itemRelRuleBaseId) {
        this.itemRelRuleBaseId = itemRelRuleBaseId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="SOURCE_ITEM_TYPE_ID", nullable=false)

    public ItemType getItemTypeBySourceItemTypeId() {
        return this.itemTypeBySourceItemTypeId;
    }
    
    public void setItemTypeBySourceItemTypeId(ItemType itemTypeBySourceItemTypeId) {
        this.itemTypeBySourceItemTypeId = itemTypeBySourceItemTypeId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="TARGET_ITEM_TYPE_ID", nullable=false)

    public ItemType getItemTypeByTargetItemTypeId() {
        return this.itemTypeByTargetItemTypeId;
    }
    
    public void setItemTypeByTargetItemTypeId(ItemType itemTypeByTargetItemTypeId) {
        this.itemTypeByTargetItemTypeId = itemTypeByTargetItemTypeId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="REL_TYPE_ID", nullable=false)

    public RelationshipType getRelationshipType() {
        return this.relationshipType;
    }
    
    public void setRelationshipType(RelationshipType relationshipType) {
        this.relationshipType = relationshipType;
    }
    
    @Column(name="ITEM_REL_RULE_BASE_DESC", nullable=false, length=256)

    public String getItemRelRuleBaseDesc() {
        return this.itemRelRuleBaseDesc;
    }
    
    public void setItemRelRuleBaseDesc(String itemRelRuleBaseDesc) {
        this.itemRelRuleBaseDesc = itemRelRuleBaseDesc;
    }
   








}