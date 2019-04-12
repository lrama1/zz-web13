package com.sample.web.domain;

public class Question {
	private String questionId;
	private String questionText;
	private String questionAnswer;
	private String visible;

	public String getQuestionId() {
		return questionId;
	}

	public String getQuestionText() {
		return questionText;
	}

	public String getQuestionAnswer() {
		return questionAnswer;
	}

	public String getVisible() {
		return visible;
	}

	public void setQuestionId(String questionId) {
		this.questionId = questionId;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public void setQuestionAnswer(String questionAnswer) {
		this.questionAnswer = questionAnswer;
	}

	public void setVisible(String visible) {
		this.visible = visible;
	}

	public void populateWithSample() {
		int appender = getNextNumber();
		questionId = "Sample Value questionId " + appender;
		questionText = "Sample Value questionText " + appender;
		questionAnswer = "Sample Value questionAnswer " + appender;
		visible = "Sample Value visible " + appender;
	}

	static int sampleCounter = 0;

	private static int getNextNumber() {
		sampleCounter++;
		return sampleCounter;
	}

	public String toString() {
		return "questionId = " + questionId + ", questionText = " + questionText + ", questionAnswer = "
				+ questionAnswer + ", visible = " + visible;
	}
}
