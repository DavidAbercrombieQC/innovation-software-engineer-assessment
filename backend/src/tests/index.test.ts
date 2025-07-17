import {describe, it, expect} from 'vitest';
import app from '../index';
import request from 'supertest';

describe('Test health endpoint', () => {
    it('should return status and timestamp', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: 'OK',
            timestamp: expect.any(String)
        });
    })
});

describe('Test getting all issues', () => {
    it('should return a list of issues', async () => {
        const response = await request(app).get('/api/issues');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                description: expect.any(String),
                priority: expect.any(String),
                status: expect.any(String)
            })
        ]));
    });
});

describe('Test creating a new issue', () => {
    it('should create a new issue and return the updated list', async () => {
        const newIssue = {
            title: 'New Issue',
            description: 'This is a new issue.',
            priority: 'Medium',
            status: 'Open'
        };
        
        const response = await request(app)
            .post('/api/issues')
            .send(newIssue);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining(newIssue)
        ]));
    });
});

describe('Test updating an issue', () => {
    it('should update an issue and return the updated list', async () => {
        const updatedIssue = {
            title: 'Updated Issue',
            description: 'This issue has been updated.',
            priority: 'Low',
            status: 'Closed'
        };
        
        const response = await request(app)
            .put('/api/issues/1')
            .send(updatedIssue);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining(updatedIssue)
        ]));
    });
});