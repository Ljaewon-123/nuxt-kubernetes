// @noErrors
import { test, expect, vi } from 'vitest';

// Mock client 객체
const mockClient = {
  todo: {
    getTodos: {
      query: vi.fn(async (input) => ({
        todos: [
          { title: 'Learn tRPC', value: 1, ref: input.allContext },
          { title: 'Build something great', value: 2, ref: input.allContext },
        ],
      })),
    },
    createTodo: {
      mutate: vi.fn(async (input) => ({
        success: true,
        todo: input,
      })),
    },
  },
};

test('getTodos returns correct todos with input', async () => {
  const input = { allContext: 'contextValue' };

  const result = await mockClient.todo.getTodos.query(input);

  expect(result.todos).toHaveLength(2);
  expect(result.todos[0]).toEqual({
    title: 'Learn tRPC',
    value: 1,
    ref: 'contextValue',
  });
  expect(result.todos[1]).toEqual({
    title: 'Build something great',
    value: 2,
    ref: 'contextValue',
  });
});

test('createTodo successfully creates a todo', async () => {
  const input = { title: 'New Task', value: '100' };

  const result = await mockClient.todo.createTodo.mutate(input);

  expect(result.success).toBe(true);
  expect(result.todo).toEqual(input);
});
