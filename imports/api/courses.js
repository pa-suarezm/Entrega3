import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  
  Meteor.publish('courses', function coursesPublication() {
    return Courses.find({});
  });
  
}

Meteor.methods({
  'courses.insert'(nombre, codigo, creditos, estudiantes, secciones, efectividad, promedio, aprobaron, reprobaron){
    Courses.insert({
      nombre,
      codigo,
      creditos,
      estudiantes,
      secciones,
      efectividad,
      promedio,
      aprobaron,
      reprobaron
    });
  }
});