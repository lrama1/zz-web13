package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * RelationshipAttribute entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="RELATIONSHIP_ATTRIBUTE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class RelationshipAttribute  implements java.io.Serializable {


    // Fields    

     private String relAttrId;
     private Relationship relationship;
     private String relAttrValue;
     private String relAttrTypeId;


    // Constructors

    /** default constructor */
    public RelationshipAttribute() {
    }

	/** minimal constructor */
    public RelationshipAttribute(String relAttrId, Relationship relationship, String relAttrTypeId) {
        this.relAttrId = relAttrId;
        this.relationship = relationship;
        this.relAttrTypeId = relAttrTypeId;
    }
    
    /** full constructor */
    public RelationshipAttribute(String relAttrId, Relationship relationship, String relAttrValue, String relAttrTypeId) {
        this.relAttrId = relAttrId;
        this.relationship = relationship;
        this.relAttrValue = relAttrValue;
        this.relAttrTypeId = relAttrTypeId;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="REL_ATTR_ID", unique=true, nullable=false, length=32)

    public String getRelAttrId() {
        return this.relAttrId;
    }
    
    public void setRelAttrId(String relAttrId) {
        this.relAttrId = relAttrId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="REL_ID", nullable=false)

    public Relationship getRelationship() {
        return this.relationship;
    }
    
    public void setRelationship(Relationship relationship) {
        this.relationship = relationship;
    }
    
    @Column(name="REL_ATTR_VALUE", length=256)

    public String getRelAttrValue() {
        return this.relAttrValue;
    }
    
    public void setRelAttrValue(String relAttrValue) {
        this.relAttrValue = relAttrValue;
    }
    
    @Column(name="REL_ATTR_TYPE_ID", nullable=false, length=32)

    public String getRelAttrTypeId() {
        return this.relAttrTypeId;
    }
    
    public void setRelAttrTypeId(String relAttrTypeId) {
        this.relAttrTypeId = relAttrTypeId;
    }
   








}