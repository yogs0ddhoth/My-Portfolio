import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

interface PageProps {
  className?: string;
  header?: {
    title?: React.ReactNode;
    action?: React.ReactNode;
    avatar?: React.ReactNode;
    subheader?: React.ReactNode;
  };
  content?: React.ReactNode;
  actions?: React.ReactNode;
}
export default function ({ className, header, content, actions }: PageProps) {
  return (
    <Card className={className}>
      <CardHeader {...header} />
      <CardContent>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
}
