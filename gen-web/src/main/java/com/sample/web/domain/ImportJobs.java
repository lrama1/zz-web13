package com.sample.web.domain;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


/**
 * ImportJobs entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name="IMPORT_JOBS"
    ,schema="PUBLIC"
    ,catalog="PUBLIC"
)

public class ImportJobs  implements java.io.Serializable {


    // Fields    

     private String filename;
     private String status;
     private Date starttime;
     private Date endtime;


    // Constructors

    /** default constructor */
    public ImportJobs() {
    }

	/** minimal constructor */
    public ImportJobs(String filename) {
        this.filename = filename;
    }
    
    /** full constructor */
    public ImportJobs(String filename, String status, Date starttime, Date endtime) {
        this.filename = filename;
        this.status = status;
        this.starttime = starttime;
        this.endtime = endtime;
    }

   
    // Property accessors
    @Id 
    
    @Column(name="FILENAME", unique=true, nullable=false, length=250)

    public String getFilename() {
        return this.filename;
    }
    
    public void setFilename(String filename) {
        this.filename = filename;
    }
    
    @Column(name="STATUS", length=1)

    public String getStatus() {
        return this.status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    @Temporal(TemporalType.DATE)
    @Column(name="STARTTIME", length=10)

    public Date getStarttime() {
        return this.starttime;
    }
    
    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }
    @Temporal(TemporalType.DATE)
    @Column(name="ENDTIME", length=10)

    public Date getEndtime() {
        return this.endtime;
    }
    
    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }
   








}