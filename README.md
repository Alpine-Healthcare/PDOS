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

A cross-platform library for managing and interacting with patient health data with privacy, security, and interoperability at its core.

## Overview

PDOS (Patient Data Operating System) is a library that provides a secure framework for handling patient health data. It includes features for managing treatments, messages, and synchronizing health records while maintaining privacy and security.

## Features

- **Data Management**: Secure handling of patient health records
- **Treatment Management**: Track active treatments and treatment instances
- **Messaging System**: Secure communication for healthcare providers
- **Privacy-First Architecture**: Built with patient data privacy as a core principle
- **Modular Design**: Extensible architecture through a module system

## Modules

PDOS is built on a modular architecture with the following key modules:

### Auth Module

The Auth module provides robust authentication, supporting multiple authentication methods:

- **Wallet Authentication**: Connect using Web3 wallets via EIP-1193 providers
- **Private Key Authentication**: Initialize by passing in a private key

The authentication process includes:
1. User authentication verification
2. On-chain verification of user status
3. Access to PDOS root hash and compute node information
4. Integration with the Alpine Healthcare smart contracts

```typescript
// Initialize with wallet authentication
await pdos().auth.initializeWalletUser(provider);

// Check if user is active
const isActive = await pdos().auth.checkIsActive();

// Get PDOS root hash
const rootHash = await pdos().auth.getPDOSRoot();
```

### Encryption Module

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

### Storage Module

The Storage module provides a flexible storage solution for persistent data:

- **Cross-Platform Compatibility**: Works across web and mobile platforms
- **Secure Storage**: Securely store sensitive information
- **Platform-Specific Adaptations**: Automatically adapts to the current platform

```typescript
// Store data
await pdos().storage.addItem('user_preferences', JSON.stringify(preferences));

// Retrieve data
const preferences = JSON.parse(await pdos().storage.getItem('user_preferences'));
```

### AppManager Module

The AppManager module handles application lifecycle management:

- **Platform Detection**: Automatically detects and adapts to different platforms
- **Lifecycle Events**: Manages application lifecycle events (startup, foreground, background)
- **Platform-Specific Optimizations**: Implements optimizations for different platforms

```typescript
// The AppManager is automatically initialized with the core system
// Lifecycle events are handled internally
```

### Notification Module

The Notification module manages user notifications across platforms:

- **Cross-Platform Notifications**: Supports web and mobile notification systems
- **Permission Management**: Handles notification permission requests
- **Custom Notification Channels**: Configurable notification channels for Android
- **Event Listeners**: Register callbacks for notification events

```typescript
// Add a notification listener
await pdos().notification.addListener((notification) => {
  console.log('New notification received:', notification);
});
```

### DataRequest Module

The DataRequest module provides access to health data from various sources:

- **HealthKit Integration**: Seamless integration with Apple HealthKit
- **Permission Management**: Handles health data access permissions
- **Metrics Collection**: Collects and normalizes health metrics
- **Data Aggregation**: Aggregates health data for analysis

```typescript
// Check access to health metrics
await pdos().dataRequest.checkAccess(['step_count', 'heart_rate']);

// Get today's health data
const todaysSteps = await pdos().dataRequest.getTodaysValue('step_count');
```

## Actions

PDOS provides a high-level actions API for common operations across different domains. Actions are pre-defined functions that abstract complex operations, making it easier to interact with the PDOS system without deep knowledge of its internal architecture.

### Data Actions

Data actions handle synchronization and retrieval of health data:

- **Sync**: Synchronizes treatment binaries and updates the Merkle tree root hash
- **GetAllRecords**: Retrieves all health data records from the data manifest

```typescript
// Synchronize data
await actions.data.sync();

// Get all health records
const healthRecords = actions.data.getAllRecords();
```

### Inbox Actions

Inbox actions manage message operations within the system:

- **GetMessages**: Retrieves unread messages from the inbox
- **ClearMessages**: Clears all messages from the inbox
- **AddMessage**: Adds a new message to the inbox

```typescript
// Get all unread messages
const messages = await actions.inbox.getMessages();

// Clear all messages
await actions.inbox.clearMessages();
```

### Treatments Actions

Treatments actions handle operations related to medical treatments:

- **AddTreatment**: Adds a new treatment to the treatment manifest
- **GetActiveTreatments**: Retrieves all active treatments
- **GetTreatment**: Finds a specific treatment by name
- **GetTreatmentInstances**: Retrieves all instances of a specific treatment
- **GetTreatmentBinaryForTreatment**: Retrieves the binary data associated with a treatment

```typescript
// Get all active treatments
const treatments = actions.treatments.getActiveTreatments();

// Add a new treatment
await actions.treatments.addTreatment('Medication A', 'med-hash-123', {
  dosage: '10mg',
  frequency: 'twice daily'
});

// Get instances of a treatment
const instances = actions.treatments.getTreatmentInstances('Medication A');
```

## Core

The PDOS Core is the central management system that coordinates all components of the PDOS ecosystem. It handles module initialization, configuration, and lifecycle management.

### Configuration

The Core is initialized with a configuration object that defines its behavior:

```typescript
const core = new Core({
  // Environment setting - currently only 'marigold' is supported
  env: 'marigold',
  
  // Context for the PDOS instance
  context: {
    // Gateway URL for API communication
    gatewayURL: 'https://your-gateway-url.com',
    // Whether this instance is running as a compute node
    isComputeNode: false
  },
  
  // Optional test configuration
  test: {
    initCredentialId: 'test-credential-id'
  },
  
  // Module configuration
  modules: {
    auth: {},
    encryption: {
      enabled: true
    },
    storage: {},
    appManager: {},
    notification: {},
    dataRequest: {}
  }
});
```

### Initialization

After configuring the Core, you need to start it to initialize all modules and stores:

```typescript
// Start PDOS with default configuration
await core.start();

// Start PDOS with dependency injection for specific modules
await core.start({
  storage: {
    storageLib: customStorageImplementation
  },
  notification: {
    Notifications: customNotificationSystem,
    Permissions: customPermissionsSystem
  }
});
```

During initialization, the Core:

1. Validates the configuration
2. Loads and initializes requested modules
3. Checks module dependencies
4. Starts each module in the correct order
5. Initializes the store system
6. Calls post-start methods on all modules

### Accessing Core Services

The singleton pattern allows easy access to Core services:

```typescript
import pdos from '@alpinehealthcare/pdos';

// Access modules
const authModule = pdos().modules?.auth;
const encryptionModule = pdos().modules?.encryption;

// Access stores
const userAccount = pdos().stores.userAccount;

// Access the Merkle tree
const rootNode = pdos().tree.root;
```

### Reset and Lifecycle Management

The Core provides methods to manage the lifecycle of the PDOS system:

```typescript
// Reset the PDOS system
await pdos().reset();

// Check if PDOS has started
const isStarted = pdos().started;

// Access environment information
const gatewayURL = pdos().gatewayURL;
const isComputeNode = pdos().isComputeNode;
```

The reset method calls the restart method on all active modules, allowing them to clear state and reinitialize as needed.

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
- **Automatic Tree Construction**: The tree builds itself automatically when provided with a root hash
- **Root Hash Synchronization**: Change propagation throughout the tree with automatic blockchain sync

#### Core Concepts

##### NetworkMapper and Child Node Registration

Store classes like `UserAccount`, `TreatmentManifest`, etc. register their child node types in the `NetworkMapper` during their constructor initialization. This registration is crucial for the automatic tree building process:

```typescript
// Example from UserAccount.ts constructor
constructor(core: Core) {
  super(core, [], "N_UserAccount")
  
  // Register child node types in the NetworkMapper
  addNodeToNetworkMapper("TreatmentManifest", TreatmentManifest)
  addNodeToNetworkMapper("DataManifest", DataManifest)
  addNodeToNetworkMapper("Inbox", Inbox)
}
```

The `NetworkMapper` maintains a registry of node types to their corresponding classes, enabling nodes to construct child instances of the correct type when traversing the tree.

##### Automatic Tree Building

When initializing the PDOS system with a root hash, the tree automatically builds itself by:

1. Loading the root node data using the provided hash
2. Detecting child nodes from the edge information in the node data
3. Creating instances of the appropriate node classes (using the NetworkMapper registry)
4. Recursively loading child nodes and their children

```typescript
// Initializing with a root hash
await userAccount.init(rootHash);

// Under the hood, the node getter loads data and builds the tree
public get node() {
  return (async () => {
    if (this._hash) {
      // Load existing node data from storage
      this._rawNode = await getFromPdfs(this._hash)
      // Process node data, decrypt if needed
      // ...
      
      // Set node properties based on loaded data
      this._nodeType = this._rawNode.type
      this._treePathInclusive = [...this._treePath, this._hash]
    } else {
      // Create a new node if no hash exists
      // ...
    }
    
    // Process loaded node
    this.onNodeLoad()
  })()
}
```

##### Root PDOS Hash and Blockchain Synchronization

The root hash of the PDOS Merkle tree represents the state of the entire patient data structure. This hash is stored on-chain to provide a tamper-proof reference point for the data.

The `syncLocalRootHash` method synchronizes the local root hash with the blockchain when changes are made:

```typescript
// Synchronizing the local root hash with the blockchain
public async syncLocalRootHash(addressToUpdate?: string) {
  if (this.core.modules.auth?.authType === AuthType.WALLET) {
    // Get the current on-chain root hash
    const hashId = await this.core.modules.auth?.getPDOSRoot(addressToUpdate)
    
    // If local hash differs from on-chain hash, update it
    if (this._hash !== hashId) {
      await this.core.modules.auth.updatePDOSRoot(
        this._hash, 
        addressToUpdate ?? this.core.modules.auth.publicKey
      )
      console.log("# pdos : synced new root - " + this._hash)
    }
  }
}
```

This synchronization happens automatically after update operations:

```typescript
// Example from PDFSNode.update method
protected async update(rawNodeUpdate: any, unencrypted: boolean = false) {
  // Process updates and encrypt if needed
  // ...
  
  // Update the node and refresh the tree
  this._hash=""
  const previousTreePath = [...this._treePathInclusive.slice(0,-1)]
  await this.node
  await this.refreshTree(previousTreePath)
  
  // Sync the root hash with the blockchain
  await this.core.tree.root.syncLocalRootHash()
}

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
