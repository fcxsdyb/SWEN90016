package com.swen90016.vr1family.model;

public class DonorIdentityDocument {
    private int id;
    private int donorId;
    private String documentNumber;
    private String documentExpiryDate;
    private String businessRegistrationDetail;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDonorId() {
        return donorId;
    }

    public void setDonorId(int donorId) {
        this.donorId = donorId;
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

    public String getBusinessRegistrationDetail() {
        return businessRegistrationDetail;
    }

    public void setBusinessRegistrationDetail(String businessRegistrationDetail) {
        this.businessRegistrationDetail = businessRegistrationDetail;
    }
}
