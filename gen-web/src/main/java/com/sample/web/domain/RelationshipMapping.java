package com.sample.web.domain;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


/**
 * RelationshipMapping entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="RELATIONSHIP_MAPPING"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class RelationshipMapping  implements java.io.Serializable {


    // Fields    

     private RelationshipMappingId id;
     private Relationship relationship;
     private Item itemByTargetItemId;
     private Item itemBySourceItemId;


    // Constructors

    /** default constructor */
    public RelationshipMapping() {
    }

    
    /** full constructor */
    public RelationshipMapping(RelationshipMappingId id, Relationship relationship, Item itemByTargetItemId, Item itemBySourceItemId) {
        this.id = id;
        this.relationship = relationship;
        this.itemByTargetItemId = itemByTargetItemId;
        this.itemBySourceItemId = itemBySourceItemId;
    }

   
    // Property accessors
    @EmbeddedId
    
    @AttributeOverrides( {
        @AttributeOverride(name="relId", column=@Column(name="REL_ID", nullable=false, length=32) ), 
        @AttributeOverride(name="sourceItemId", column=@Column(name="SOURCE_ITEM_ID", nullable=false, length=32) ), 
        @AttributeOverride(name="targetItemId", column=@Column(name="TARGET_ITEM_ID", nullable=false, length=32) ) } )

    public RelationshipMappingId getId() {
        return this.id;
    }
    
    public void setId(RelationshipMappingId id) {
        this.id = id;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="REL_ID", nullable=false, insertable=false, updatable=false)

    public Relationship getRelationship() {
        return this.relationship;
    }
    
    public void setRelationship(Relationship relationship) {
        this.relationship = relationship;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="TARGET_ITEM_ID", nullable=false, insertable=false, updatable=false)

    public Item getItemByTargetItemId() {
        return this.itemByTargetItemId;
    }
    
    public void setItemByTargetItemId(Item itemByTargetItemId) {
        this.itemByTargetItemId = itemByTargetItemId;
    }
	@ManyToOne(fetch=FetchType.LAZY)
        @JoinColumn(name="SOURCE_ITEM_ID", nullable=false, insertable=false, updatable=false)

    public Item getItemBySourceItemId() {
        return this.itemBySourceItemId;
    }
    
    public void setItemBySourceItemId(Item itemBySourceItemId) {
        this.itemBySourceItemId = itemBySourceItemId;
    }
   








}