export default function updateObject(oldObject, updatedProperties) {
    return {
        ...oldObject,
        ...updatedProperties,
    };
}