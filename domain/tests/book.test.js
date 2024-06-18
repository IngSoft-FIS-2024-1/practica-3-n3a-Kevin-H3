import { describe, it, expect, beforeEach } from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 35000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });
  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(35000);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350, 8000)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 1, 350, 8000)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book(451, 1, 'hola', 8000)).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book(451, 1, 350, -8000)).toThrow();
  });
  it('toString()', () => {
    const bookString = myBook.toString();
    const expectedString = 'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 35000';
    expect(bookString).toBe(expectedString);
  });
  it('letras por pagina()', () => {
    const cantPaginas = myBook.wordsPerPage();
    const expectedNumber = 100;
    expect(cantPaginas).toBe(expectedNumber);
  });
  it('check author is a string empty', () => {
    myBook = new Book('pepe', 'test', 350, 35000);
    myBook.setAuthor('');
    expect(() => myBook = new Book('pepe','anonimo', 350, 35000));
  });
  it('check author is empty', () => {
    expect(() => myBook = new Book(89, '', 350, 8000)).toThrow();
  });
  it('check pages is empty', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0, 8000)).toThrow();
  });
  it('check pages is empty', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 10, isNaN)).toThrow();
  });
  it('check pages is empty', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', isNaN, 8000)).toThrow();
  });

});
