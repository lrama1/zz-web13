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


/**
 * Relationship entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="RELATIONSHIP"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class Relationship  implements java.io.Serializable {


    // Fields    

     private String relId;
     private RelationshipType relationshipType;
     private String relName;
     private String relDesc;
     private Set<RelationshipAttribute> relationshipAttributes = new HashSet<RelationshipAttribute>(0);
     private Set<RelationshipMapping> relationshipMappings = new HashSet<RelationshipMapping>(0);


    // Constructors

    /** default constructor */
    public Relationship() {
    }

	/** minimal constructor */
    public Relationship(String relId, RelationshipType relationshipType, String relName) {
        this.relId = relId;
        this.relationshipType = relationshipType;
        this.relName = relName;
    }
    
    /** full constructor */
    public Relationship(String relId, RelationshipType relationshipType, String relName, String relDesc, Set<RelationshipAttribute> relationshipAttributes, Set<RelationshipMapping> relationshipMappings) {
        this.relId = relId;
        this.relationshipType = relationshipType;
        this.relName = relName;
        this.relDesc = relDesc;
        this.relationshipAttributes = relationshipAttributes;
        this.relationshipMappings = relationshipMappings;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="REL_ID", unique=true, nullable=false, length=32)

    public String getRelId() {
        return this.relId;
    }
    
    public void setRelId(String relId) {
        this.relId = relId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="REL_TYPE_ID", nullable=false)

    public RelationshipType getRelationshipType() {
        return this.relationshipType;
    }
    
    public void setRelationshipType(RelationshipType relationshipType) {
        this.relationshipType = relationshipType;
    }
    
    @Column(name="REL_NAME", nullable=false, length=128)

    public String getRelName() {
        return this.relName;
    }
    
    public void setRelName(String relName) {
        this.relName = relName;
    }
    
    @Column(name="REL_DESC", length=256)

    public String getRelDesc() {
        return this.relDesc;
    }
    
    public void setRelDesc(String relDesc) {
        this.relDesc = relDesc;
    }
@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="relationship")

    public Set<RelationshipAttribute> getRelationshipAttributes() {
        return this.relationshipAttributes;
    }
    
    public void setRelationshipAttributes(Set<RelationshipAttribute> relationshipAttributes) {
        this.relationshipAttributes = relationshipAttributes;
    }
@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="relationship")

    public Set<RelationshipMapping> getRelationshipMappings() {
        return this.relationshipMappings;
    }
    
    public void setRelationshipMappings(Set<RelationshipMapping> relationshipMappings) {
        this.relationshipMappings = relationshipMappings;
    }
   








}