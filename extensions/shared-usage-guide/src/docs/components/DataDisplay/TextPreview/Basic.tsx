import React from 'react';
import { TextPreview } from '@ks-console/shared';

export default function Basic() {
  const files = {
    'deployment.yaml': `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx`,
    'service.yaml': `apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  ports:
  - port: 80
  selector:
    app: nginx`,
    'ingress.yaml': `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix`,
  };

  return <TextPreview files={files} type='selectFiles' />;
}
