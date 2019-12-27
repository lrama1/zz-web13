package com.sample.web.dto;

public class RelationshipMappingDTO {
	
	private String sourceItemId;
	private String targetItemId;
	private String relTypeId;
	private String relName;
	
	
	public RelationshipMappingDTO(String sourceItemId, String targetItemId, String relTypeId, String relName) {
		super();
		this.sourceItemId = sourceItemId;
		this.targetItemId = targetItemId;
		this.relTypeId = relTypeId;
		this.relName = relName;
	}
	
	public RelationshipMappingDTO() {
		
	}

	public String getSourceItemId() {
		return sourceItemId;
	}

	public void setSourceItemId(String sourceItemId) {
		this.sourceItemId = sourceItemId;
	}

	public String getTargetItemId() {
		return targetItemId;
	}

	public void setTargetItemId(String targetItemId) {
		this.targetItemId = targetItemId;
	}

	public String getRelTypeId() {
		return relTypeId;
	}

	public void setRelTypeId(String relTypeId) {
		this.relTypeId = relTypeId;
	}

	public String getRelName() {
		return relName;
	}

	public void setRelName(String relName) {
		this.relName = relName;
	}

	
}
