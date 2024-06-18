import { describe, it, expect, beforeEach } from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 8000);
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

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check page param is a number', () => {
    // TODO
  });

  it('check pages not < 1', () => {
    // TODO
  });
  it('toString()', () => {
    // TODO
  });
  it('letras por pagina()', () => {
    const libro1 = new Book('avatar', 'pepe',
      '100', '8000');
    const cantPaginas = libro1.wordsPerPage();
    const expectedNumber = 80;
    expect(cantPaginas).toBe(expectedNumber);
  });

});
