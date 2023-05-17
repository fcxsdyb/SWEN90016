package com.swen90016.vr1family.model;

public class RecipientInformation {
    private int id;
    private String name;
    private int age;
    private String nationality;
    private String previousAddress;
    private int totalFamilyMembers;
    private String partnerName;
    private int partnerAge;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPreviousAddress() {
        return previousAddress;
    }

    public void setPreviousAddress(String previousAddress) {
        this.previousAddress = previousAddress;
    }

    public int getTotalFamilyMembers() {
        return totalFamilyMembers;
    }

    public void setTotalFamilyMembers(int totalFamilyMembers) {
        this.totalFamilyMembers = totalFamilyMembers;
    }

    public String getPartnerName() {
        return partnerName;
    }

    public void setPartnerName(String partnerName) {
        this.partnerName = partnerName;
    }

    public int getPartnerAge() {
        return partnerAge;
    }

    public void setPartnerAge(int partnerAge) {
        this.partnerAge = partnerAge;
    }

}
