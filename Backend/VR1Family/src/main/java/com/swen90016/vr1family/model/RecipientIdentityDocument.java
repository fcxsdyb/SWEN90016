package com.swen90016.vr1family.model;

public class RecipientIdentityDocument {
    private int id;
    private int recipientId;
    private String nationality;
    private String documentNumber;
    private String documentExpiryDate;
    private String documentImage;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(int recipientId) {
        this.recipientId = recipientId;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getDocumentExpiryDate() {
        return documentExpiryDate;
    }

    public void setDocumentExpiryDate(String documentExpiryDate) {
        this.documentExpiryDate = documentExpiryDate;
    }

    public String getDocumentImage() {
        return documentImage;
    }

    public void setDocumentImage(String documentImage) {
        this.documentImage = documentImage;
    }
}
