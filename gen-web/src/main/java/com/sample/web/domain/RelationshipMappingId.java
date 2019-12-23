package com.sample.web.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;


/**
 * RelationshipMappingId entity. @author MyEclipse Persistence Tools
 */
@Embeddable

public class RelationshipMappingId  implements java.io.Serializable {


    // Fields    

     private String relId;
     private String sourceItemId;
     private String targetItemId;


    // Constructors

    /** default constructor */
    public RelationshipMappingId() {
    }

    
    /** full constructor */
    public RelationshipMappingId(String relId, String sourceItemId, String targetItemId) {
        this.relId = relId;
        this.sourceItemId = sourceItemId;
        this.targetItemId = targetItemId;
    }

   
    // Property accessors

    @Column(name="REL_ID", nullable=false, length=32)

    public String getRelId() {
        return this.relId;
    }
    
    public void setRelId(String relId) {
        this.relId = relId;
    }

    @Column(name="SOURCE_ITEM_ID", nullable=false, length=32)

    public String getSourceItemId() {
        return this.sourceItemId;
    }
    
    public void setSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
    }

    @Column(name="TARGET_ITEM_ID", nullable=false, length=32)

    public String getTargetItemId() {
        return this.targetItemId;
    }
    
    public void setTargetItemId(String targetItemId) {
        this.targetItemId = targetItemId;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof RelationshipMappingId) ) return false;
		 RelationshipMappingId castOther = ( RelationshipMappingId ) other; 
         
		 return ( (this.getRelId()==castOther.getRelId()) || ( this.getRelId()!=null && castOther.getRelId()!=null && this.getRelId().equals(castOther.getRelId()) ) )
 && ( (this.getSourceItemId()==castOther.getSourceItemId()) || ( this.getSourceItemId()!=null && castOther.getSourceItemId()!=null && this.getSourceItemId().equals(castOther.getSourceItemId()) ) )
 && ( (this.getTargetItemId()==castOther.getTargetItemId()) || ( this.getTargetItemId()!=null && castOther.getTargetItemId()!=null && this.getTargetItemId().equals(castOther.getTargetItemId()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getRelId() == null ? 0 : this.getRelId().hashCode() );
         result = 37 * result + ( getSourceItemId() == null ? 0 : this.getSourceItemId().hashCode() );
         result = 37 * result + ( getTargetItemId() == null ? 0 : this.getTargetItemId().hashCode() );
         return result;
   }   





}