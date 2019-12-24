package com.sample.web.domain;

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;


/**
 * ItemAttributeType entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="ITEM_ATTRIBUTE_TYPE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class ItemAttributeType  implements java.io.Serializable {


    // Fields    

     private String itemAttrTypeId;
     private ItemType itemTypeByItemAttrTypeLookupListId;
     private ItemAttrTypeDatatype itemAttrTypeDatatype;
     
     @JsonBackReference
     private ItemType itemTypeByItemTypeId;
     private String itemAttrTypeCode;
     private String itemAttrTypeName;
     private String itemAttrTypeDesc;
     private BigDecimal itemAttrTypeLength;
     private Boolean itemAttrTypeIssearchable;
     private Byte itemAttrTypeDisplayIndex;
     private Boolean itemAttrTypeIsRequired;


    // Constructors

    /** default constructor */
    public ItemAttributeType() {
    }

	/** minimal constructor */
    public ItemAttributeType(String itemAttrTypeId, ItemAttrTypeDatatype itemAttrTypeDatatype, ItemType itemTypeByItemTypeId, String itemAttrTypeCode, String itemAttrTypeName, BigDecimal itemAttrTypeLength, Boolean itemAttrTypeIssearchable, Byte itemAttrTypeDisplayIndex, Boolean itemAttrTypeIsRequired, BigDecimal itemAttrTypeIsMetaphonekey) {
        this.itemAttrTypeId = itemAttrTypeId;
        this.itemAttrTypeDatatype = itemAttrTypeDatatype;
        this.itemTypeByItemTypeId = itemTypeByItemTypeId;
        this.itemAttrTypeCode = itemAttrTypeCode;
        this.itemAttrTypeName = itemAttrTypeName;
        this.itemAttrTypeLength = itemAttrTypeLength;
        this.itemAttrTypeIssearchable = itemAttrTypeIssearchable;
        this.itemAttrTypeDisplayIndex = itemAttrTypeDisplayIndex;
        this.itemAttrTypeIsRequired = itemAttrTypeIsRequired;
    }
    
    /** full constructor */
    public ItemAttributeType(String itemAttrTypeId, ItemType itemTypeByItemAttrTypeLookupListId, ItemAttrTypeDatatype itemAttrTypeDatatype, ItemType itemTypeByItemTypeId, String itemAttrTypeCode, String itemAttrTypeName, String itemAttrTypeDesc, BigDecimal itemAttrTypeLength, Boolean itemAttrTypeIssearchable, Byte itemAttrTypeDisplayIndex, Boolean itemAttrTypeIsRequired) {
        this.itemAttrTypeId = itemAttrTypeId;
        this.itemTypeByItemAttrTypeLookupListId = itemTypeByItemAttrTypeLookupListId;
        this.itemAttrTypeDatatype = itemAttrTypeDatatype;
        this.itemTypeByItemTypeId = itemTypeByItemTypeId;
        this.itemAttrTypeCode = itemAttrTypeCode;
        this.itemAttrTypeName = itemAttrTypeName;
        this.itemAttrTypeDesc = itemAttrTypeDesc;
        this.itemAttrTypeLength = itemAttrTypeLength;
        this.itemAttrTypeIssearchable = itemAttrTypeIssearchable;
        this.itemAttrTypeDisplayIndex = itemAttrTypeDisplayIndex;
        this.itemAttrTypeIsRequired = itemAttrTypeIsRequired;
    }

   
    // Property accessors
    @Id 
    @GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid",
	  strategy = "uuid")
    @Column(name="ITEM_ATTR_TYPE_ID", unique=true, nullable=false, length=32)

    public String getItemAttrTypeId() {
        return this.itemAttrTypeId;
    }
    
    public void setItemAttrTypeId(String itemAttrTypeId) {
        this.itemAttrTypeId = itemAttrTypeId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="ITEM_ATTR_TYPE_LOOKUP_LIST_ID")

    public ItemType getItemTypeByItemAttrTypeLookupListId() {
        return this.itemTypeByItemAttrTypeLookupListId;
    }
    
    public void setItemTypeByItemAttrTypeLookupListId(ItemType itemTypeByItemAttrTypeLookupListId) {
        this.itemTypeByItemAttrTypeLookupListId = itemTypeByItemAttrTypeLookupListId;
    }
    
	@ManyToOne(fetch=FetchType.EAGER)
        @JoinColumn(name="ITEM_ATTR_TYPE_DATATYPE_CODE", nullable=false)

    public ItemAttrTypeDatatype getItemAttrTypeDatatype() {
        return this.itemAttrTypeDatatype;
    }
    
    public void setItemAttrTypeDatatype(ItemAttrTypeDatatype itemAttrTypeDatatype) {
        this.itemAttrTypeDatatype = itemAttrTypeDatatype;
    }
	
    @ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="ITEM_TYPE_ID", nullable=false)
    public ItemType getItemTypeByItemTypeId() {
        return this.itemTypeByItemTypeId;
    }
    
    public void setItemTypeByItemTypeId(ItemType itemTypeByItemTypeId) {
        this.itemTypeByItemTypeId = itemTypeByItemTypeId;
    }
    
    @Column(name="ITEM_ATTR_TYPE_CODE", nullable=false, length=64)

    public String getItemAttrTypeCode() {
        return this.itemAttrTypeCode;
    }
    
    public void setItemAttrTypeCode(String itemAttrTypeCode) {
        this.itemAttrTypeCode = itemAttrTypeCode;
    }
    
    @Column(name="ITEM_ATTR_TYPE_NAME", nullable=false, length=128)

    public String getItemAttrTypeName() {
        return this.itemAttrTypeName;
    }
    
    public void setItemAttrTypeName(String itemAttrTypeName) {
        this.itemAttrTypeName = itemAttrTypeName;
    }
    
    @Column(name="ITEM_ATTR_TYPE_DESC", length=256)

    public String getItemAttrTypeDesc() {
        return this.itemAttrTypeDesc;
    }
    
    public void setItemAttrTypeDesc(String itemAttrTypeDesc) {
        this.itemAttrTypeDesc = itemAttrTypeDesc;
    }
    
    @Column(name="ITEM_ATTR_TYPE_LENGTH", nullable=false, precision=128, scale=0)

    public BigDecimal getItemAttrTypeLength() {
        return this.itemAttrTypeLength;
    }
    
    public void setItemAttrTypeLength(BigDecimal itemAttrTypeLength) {
        this.itemAttrTypeLength = itemAttrTypeLength;
    }
    
    @Column(name="ITEM_ATTR_TYPE_ISSEARCHABLE", nullable=false, precision=1, scale=0)

    public Boolean getItemAttrTypeIssearchable() {
        return this.itemAttrTypeIssearchable;
    }
    
    public void setItemAttrTypeIssearchable(Boolean itemAttrTypeIssearchable) {
        this.itemAttrTypeIssearchable = itemAttrTypeIssearchable;
    }
    
    @Column(name="ITEM_ATTR_TYPE_DISPLAY_INDEX", nullable=false, precision=2, scale=0)

    public Byte getItemAttrTypeDisplayIndex() {
        return this.itemAttrTypeDisplayIndex;
    }
    
    public void setItemAttrTypeDisplayIndex(Byte itemAttrTypeDisplayIndex) {
        this.itemAttrTypeDisplayIndex = itemAttrTypeDisplayIndex;
    }
    
    @Column(name="ITEM_ATTR_TYPE_IS_REQUIRED", nullable=false, precision=1, scale=0)

    public Boolean getItemAttrTypeIsRequired() {
        return this.itemAttrTypeIsRequired;
    }
    
    public void setItemAttrTypeIsRequired(Boolean itemAttrTypeIsRequired) {
        this.itemAttrTypeIsRequired = itemAttrTypeIsRequired;
    } 
    
}