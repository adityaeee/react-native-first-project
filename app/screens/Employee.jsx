import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

import Button from "../components/Button";

const data = [
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
    {
        id: 1,
        name: "Aditya",
        email: "aditya@gmail.com",
        positin: "Manager",
        address: "Jl. H. Dahlan",
    },
];

const Employee = () => {
    const renderItem = () => {
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>;
    };

    return (
        <View>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Employee</Text>
                        <Text style={styles.headerSubtitle}>
                            List and form employee
                        </Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="Enter your full name"
                                placeholderTextColor={COLORS.black}
                                keyboardType="text"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="Enter your email address"
                                placeholderTextColor={COLORS.black}
                                keyboardType="email-address"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Position</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="Enter your position"
                                placeholderTextColor={COLORS.black}
                                keyboardType="text"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Address</Text>
                        <View style={styles.inputBox}>
                            <TextInput
                                placeholder="Enter your address"
                                placeholderTextColor={COLORS.black}
                                keyboardType="text"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Button title="Save" filled style={styles.saveButton} />
                        <Button
                            title="Cancel"
                            filled
                            style={styles.cancelButton}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text>List Employee</Text>
                    <FlatList>
                        data={data}
                        renderItem={renderItem}
                        keyExtrators={(item) => item.id}
                    </FlatList>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Employee;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: COLORS.white,
    },
    container: {
        marginHorizontal: 22,
    },
    header: {
        marginVertical: 22,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 12,
        color: COLORS.black,
    },
    headerSubtitle: {
        fontSize: 16,
        color: COLORS.black,
    },
    inputGroup: {
        marginBottom: 12,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 8,
    },
    inputBox: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
    },
    inputBoxRow: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 22,
    },
    input: {
        width: "100%",
    },
    countryCodeInput: {
        width: "12%",
        borderRightWidth: 1,
        borderColor: COLORS.grey,
        height: "100%",
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
    },
    saveButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10,
    },
    cancelButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10,
        backgroundColor: COLORS.grey,
    },
    socialIcon: {
        height: 36,
        width: 36,
        marginRight: 8,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22,
    },
    footerText: {
        fontSize: 16,
        color: COLORS.black,
    },
    item: {
        backgroundColor: "#f903ef",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 12,
    },
});
