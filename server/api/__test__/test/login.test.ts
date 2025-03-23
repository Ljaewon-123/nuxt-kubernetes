import { expect, test, vi } from "vitest";
import loginPost from "../../temp/login.post";

vi.mock('../../temp/login.post', () => {
  return {
    default: vi.fn(async (event: any) => {

      if(event.body.password !== '1234') throw createError({message: 'hi'})

      return { result: 'hi' };
    })
  };
});

const mockReadBody = vi.fn();
const mockCreateError = vi.fn();

// loginPost를 모킹하면 이런건 필요없겠다. 
const mockEvent = {
  // 여기서는 body 속성만 필요하므로 body를 모킹합니다.
  body: { password: '1234' },
  // H3의 readBody와 createError 메소드를 모킹
  readBody: mockReadBody,
  createError: mockCreateError
};

test('test temp/login handler', async() => {
  const tempMock = {
    body: { password: '1234' }
  }
  const result = await loginPost(tempMock as any);

  expect(result).toEqual({ result: 'hi' }); // 핸들러에서 반환되는 값
})

test("Throw test temp/login handler", async() => {
  const tempMockError = {
    body: { password: '1111' }
  }

  try{
    await loginPost(tempMockError as any);
  }
  catch(err: any){
    expect(err.message).toBe('hi')
  }
})