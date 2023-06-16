export default function findTutoryById(tutories, id) {
  return tutories.find((tutory) => tutory.id === Number(id)) || {
    subject: null,
  };
}
