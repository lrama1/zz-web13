package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * RelationshipAttributeType entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="RELATIONSHIP_ATTRIBUTE_TYPE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class RelationshipAttributeType  implements java.io.Serializable {


    // Fields    

     private String relAttrTypeId;
     private RelationshipType relationshipType;
     private String relAttrTypeCode;
     private String relAttrTypeName;
     private String relAttrTypeDesc;


    // Constructors

    /** default constructor */
    public RelationshipAttributeType() {
    }

	/** minimal constructor */
    public RelationshipAttributeType(String relAttrTypeId, RelationshipType relationshipType, String relAttrTypeCode, String relAttrTypeName) {
        this.relAttrTypeId = relAttrTypeId;
        this.relationshipType = relationshipType;
        this.relAttrTypeCode = relAttrTypeCode;
        this.relAttrTypeName = relAttrTypeName;
    }
    
    /** full constructor */
    public RelationshipAttributeType(String relAttrTypeId, RelationshipType relationshipType, String relAttrTypeCode, String relAttrTypeName, String relAttrTypeDesc) {
        this.relAttrTypeId = relAttrTypeId;
        this.relationshipType = relationshipType;
        this.relAttrTypeCode = relAttrTypeCode;
        this.relAttrTypeName = relAttrTypeName;
        this.relAttrTypeDesc = relAttrTypeDesc;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="REL_ATTR_TYPE_ID", unique=true, nullable=false, length=32)

    public String getRelAttrTypeId() {
        return this.relAttrTypeId;
    }
    
    public void setRelAttrTypeId(String relAttrTypeId) {
        this.relAttrTypeId = relAttrTypeId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="REL_TYPE_ID", nullable=false)

    public RelationshipType getRelationshipType() {
        return this.relationshipType;
    }
    
    public void setRelationshipType(RelationshipType relationshipType) {
        this.relationshipType = relationshipType;
    }
    
    @Column(name="REL_ATTR_TYPE_CODE", nullable=false, length=64)

    public String getRelAttrTypeCode() {
        return this.relAttrTypeCode;
    }
    
    public void setRelAttrTypeCode(String relAttrTypeCode) {
        this.relAttrTypeCode = relAttrTypeCode;
    }
    
    @Column(name="REL_ATTR_TYPE_NAME", nullable=false, length=128)

    public String getRelAttrTypeName() {
        return this.relAttrTypeName;
    }
    
    public void setRelAttrTypeName(String relAttrTypeName) {
        this.relAttrTypeName = relAttrTypeName;
    }
    
    @Column(name="REL_ATTR_TYPE_DESC", length=256)

    public String getRelAttrTypeDesc() {
        return this.relAttrTypeDesc;
    }
    
    public void setRelAttrTypeDesc(String relAttrTypeDesc) {
        this.relAttrTypeDesc = relAttrTypeDesc;
    }
   








}