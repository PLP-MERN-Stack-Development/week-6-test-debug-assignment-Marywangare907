import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

function BugCard({ bug, onStatusUpdate, onDelete, loading }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{bug.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{bug.description}</p>
        <div>Status: {bug.status}</div>
        <div>Priority: {bug.priority}</div>
        <button onClick={() => onStatusUpdate(bug.id, 'resolved')}>Mark as Resolved</button>
        <button onClick={() => onDelete(bug.id)}>Delete</button>
      </CardContent>
    </Card>
  );
}

export default BugCard;
