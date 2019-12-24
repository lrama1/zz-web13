package com.sample.web.domain;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


/**
 * ItemAttrTypeDatatype entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="ITEM_ATTR_TYPE_DATATYPE"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class ItemAttrTypeDatatype  implements java.io.Serializable {
    // Fields    

     private Byte itemAttrTypeDatatypeCode;
     private String itemAttrTypeDatatypeName;
     private String itemAttrTypeDatatypeDesc;
     private String regexPattern;
     //private Set<ItemAttributeType> itemAttributeTypes = new HashSet<ItemAttributeType>(0);


    // Constructors

    /** default constructor */
    public ItemAttrTypeDatatype() {
    }

	/** minimal constructor */
    public ItemAttrTypeDatatype(Byte itemAttrTypeDatatypeCode, String itemAttrTypeDatatypeName) {
        this.itemAttrTypeDatatypeCode = itemAttrTypeDatatypeCode;
        this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
    }
    
    /** full constructor */
    public ItemAttrTypeDatatype(Byte itemAttrTypeDatatypeCode, String itemAttrTypeDatatypeName, String itemAttrTypeDatatypeDesc, String regexPattern/*, Set<ItemAttributeType> itemAttributeTypes*/) {
        this.itemAttrTypeDatatypeCode = itemAttrTypeDatatypeCode;
        this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
        this.itemAttrTypeDatatypeDesc = itemAttrTypeDatatypeDesc;
        this.regexPattern = regexPattern;
        //this.itemAttributeTypes = itemAttributeTypes;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="ITEM_ATTR_TYPE_DATATYPE_CODE", unique=true, nullable=false, precision=2, scale=0)

    public Byte getItemAttrTypeDatatypeCode() {
        return this.itemAttrTypeDatatypeCode;
    }
    
    public void setItemAttrTypeDatatypeCode(Byte itemAttrTypeDatatypeCode) {
        this.itemAttrTypeDatatypeCode = itemAttrTypeDatatypeCode;
    }
    
    @Column(name="ITEM_ATTR_TYPE_DATATYPE_NAME", nullable=false, length=32)

    public String getItemAttrTypeDatatypeName() {
        return this.itemAttrTypeDatatypeName;
    }
    
    public void setItemAttrTypeDatatypeName(String itemAttrTypeDatatypeName) {
        this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
    }
    
    @Column(name="ITEM_ATTR_TYPE_DATATYPE_DESC", length=64)

    public String getItemAttrTypeDatatypeDesc() {
        return this.itemAttrTypeDatatypeDesc;
    }
    
    public void setItemAttrTypeDatatypeDesc(String itemAttrTypeDatatypeDesc) {
        this.itemAttrTypeDatatypeDesc = itemAttrTypeDatatypeDesc;
    }
    
    @Column(name="REGEX_PATTERN", length=256)

    public String getRegexPattern() {
        return this.regexPattern;
    }
    
    public void setRegexPattern(String regexPattern) {
        this.regexPattern = regexPattern;
    }
    /*
@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY, mappedBy="itemAttrTypeDatatype")

    public Set<ItemAttributeType> getItemAttributeTypes() {
        return this.itemAttributeTypes;
    }
    
    public void setItemAttributeTypes(Set<ItemAttributeType> itemAttributeTypes) {
        this.itemAttributeTypes = itemAttributeTypes;
    }
   */



}