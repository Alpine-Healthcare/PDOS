```
.----------------------------------------------------------------------------------.
|__/\\\\\\\\\\\\\____/\\\\\\\\\\\\__________/\\\\\__________/\\\\\\\\\\\___        |
| _\/\\\/////////\\\_\/\\\////////\\\______/\\\///\\\______/\\\/////////\\\_       |
|  _\/\\\_______\/\\\_\/\\\______\//\\\___/\\\/__\///\\\___\//\\\______\///__      |
|   _\/\\\\\\\\\\\\\/__\/\\\_______\/\\\__/\\\______\//\\\___\////\\\_________     |
|    _\/\\\/////////____\/\\\_______\/\\\_\/\\\_______\/\\\______\////\\\______    |
|     _\/\\\_____________\/\\\_______\/\\\_\//\\\______/\\\__________\////\\\___   |
|      _\/\\\_____________\/\\\_______/\\\___\///\\\__/\\\_____/\\\______\//\\\__  |
|       _\/\\\_____________\/\\\\\\\\\\\\/______\///\\\\\/_____\///\\\\\\\\\\\/___ |
|        _\///______________\////////////__________\/////_________\///////////_____|
'----------------------------------------------------------------------------------'
```

[![NPM Version](https://img.shields.io/npm/v/@alpinehealthcare/pdos)](https://www.npmjs.com/package/@alpinehealthcare/pdos)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A core library for managing patient health data with privacy, security, and interoperability at its center.

## Overview

PDOS (Patient Data Operating System) is a TypeScript library that provides a secure framework for handling patient health data. It includes features for managing treatments, messages, and synchronizing health records while maintaining privacy and security.

## Features

- **Data Management**: Secure handling of patient health records
- **Treatment Management**: Track active treatments and treatment instances
- **Messaging System**: Secure communication for healthcare providers
- **Privacy-First Architecture**: Built with patient data privacy as a core principle
- **Modular Design**: Extensible architecture through a module system

## Authentication

PDOS provides robust authentication through its Auth module, supporting multiple authentication methods:

- **Wallet Authentication**: Connect using Web3 wallets via EIP-1193 providers
- **Passkey Authentication**: Support for modern passkey authentication mechanisms

The authentication process includes:
1. User authentication verification
2. On-chain verification of user status
3. Access to PDOS root hash and compute node information
4. Integration with the Alpine Healthcare smart contract

```typescript
// Initialize with wallet authentication
await pdos().auth.initializeWalletUser(provider);

// Check if user is active
const isActive = await pdos().auth.checkIsActive();

// Get PDOS root hash
const rootHash = await pdos().auth.getPDOSRoot();
```

## Encryption

The Encryption module provides end-to-end encryption for patient data using a combination of symmetric and asymmetric cryptography:

- **Lit Protocol Integration**: Decentralized encryption using Lit Protocol
- **Access Control Conditions**: Smart contract-based access control for data
- **Data Key Management**: Secure management of encryption keys
- **Access Packages**: Encrypted packages containing necessary decryption keys

```typescript
// Generate an access package
const accessPackage = await pdos().encryption.generateAccessPackage();

// Encrypt data
const encryptedData = await pdos().encryption.encryptNode(data);

// Decrypt data
const decryptedData = await pdos().encryption.decryptNode(encryptedData);
```

## PDOS Merkle Tree

PDOS implements a specialized file system for patient data using a Merkle tree structure:

### PDOSNode

The `PDOSNode` class is the foundation of the PDOS Merkle tree, representing nodes in the tree:

- **Node Types**: Different node types represent different data structures
- **Tree Path Tracking**: Each node maintains its path in the tree
- **Edge Management**: Connections between nodes in the tree
- **Node Updates**: Mechanism for updating node data securely

### Merkle Tree Implementation

The PDOS Merkle tree provides:

- **Verifiable Data Integrity**: Cryptographic proof of data integrity
- **Efficient Updates**: Only changed parts of the tree need to be updated
- **Hierarchical Data Organization**: Logical organization of patient data
- **Tree Path Navigation**: Easy navigation through the tree structure

```typescript
// Creating a tree node
const nodeInstance = new PDOSNode(core, treePath, nodeType);

// Getting node data
const nodeData = nodeInstance.getData();

// Adding a child node
await nodeInstance.addChild(ChildNodeClass, "instanceName", nodeData);

// Refreshing the tree
await nodeInstance.refreshTree(previousTreePath);
```

## Installation

```bash
npm install @alpinehealthcare/pdos
# or
yarn add @alpinehealthcare/pdos
```

## Usage

```typescript
import pdos, { Core } from '@alpinehealthcare/pdos';
import { actions } from '@alpinehealthcare/pdos';

// Initialize PDOS
const core = new Core({
  env: 'marigold',
  context: {
    gatewayURL: 'https://your-gateway-url.com'
  }
});

// Start PDOS
await core.start();

// Access treatment data
const activeTreatments = await actions.treatments.getActiveTreatments();

// Sync data
await actions.data.sync();

// Access messages
const messages = await actions.inbox.getMessages();
```

## Architecture

PDOS is built on a modular architecture with the following components:

- **Core**: Central management system for modules, configuration, and user accounts
- **Modules**: Pluggable components that extend functionality
- **Actions**: Pre-defined functions for common operations
- **Store**: Data persistence layer using MobX for state management

## Development

### Prerequisites

- Node.js (v14+)
- Yarn or npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

### Build

```bash
yarn build
# or
npm run build
```

### Test

```bash
yarn test
# or
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
